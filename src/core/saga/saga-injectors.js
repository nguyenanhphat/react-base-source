import { DAEMON, ONCE_TILL_UNMOUNT, RESTART_ON_REMOUNT } from "./constants";
const injectSagaFactory = store => {
  return (key, descriptor, args) => {
    if (typeof descriptor === "undefined") {
      descriptor = {};
    }

    const newDescriptor = {
      ...descriptor,
      mode: descriptor.mode || RESTART_ON_REMOUNT
    };
    const { saga, mode } = newDescriptor;
    let hasSaga = Reflect.has(store.injectedSagas, key);

    if (process.env.NODE_ENV !== "production") {
      const oldDescriptor = store.injectedSagas[key];
      if (hasSaga && oldDescriptor.saga !== saga) {
        oldDescriptor.task.cancel();
        hasSaga = false;
      }
    }

    if (
      !hasSaga ||
      (mode !== DAEMON && mode !== ONCE_TILL_UNMOUNT)
    ) {
      store.injectedSagas[key] = {
        ...newDescriptor,
        task: store.runSaga(saga, args)
      };
    }
  };
};

const ejectSagaFactory = store => {
  return (key) => {
    if (Reflect.has(store.injectedSagas, key)) {
      const descriptor = store.injectedSagas[key];
      if (descriptor.mode && descriptor.mode !== DAEMON) {
        descriptor.task.cancel();
        if (process.env.NODE_ENV === "production") {
          store.injectedSagas[key] = "done";
        }
      }
    }
  };
};

const getInjectors = store => {
  return {
    injectSaga: injectSagaFactory(store),
    ejectSaga: ejectSagaFactory(store)
  };
};

export default getInjectors;
