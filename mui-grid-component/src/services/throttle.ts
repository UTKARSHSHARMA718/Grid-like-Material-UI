export function throttle(callBack: any, delay = 300) {
  let shouldWait = false;
  let waitingArgs: any = null;
  const handleLastCall = () => {
    if (!waitingArgs) {
      shouldWait = false;
      return;
    }
    callBack(...waitingArgs);
    waitingArgs = null;
    setTimeout(handleLastCall, delay);
  };

  return (...args: any[]) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    callBack(...args);
    shouldWait = true;
    setTimeout(handleLastCall, delay);
  };
}
