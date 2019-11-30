import store from "../store";

const Guards = {
  logInCheck(to, from, next) {
    if (!store.getters["user/getAccountName"]) {
      next({ path: "" });
    } else {
      next();
    }
  },
  custodianCheck(to, from, next) {
    const isCustodian = store.getters["user/getIsCustodian"];
    if (!isCustodian) {
      next({ path: "" });
    } else {
      next();
    }
  },
  memberCheck(to, from, next) {
    const status = store.getters["user/getMemberStatus"];
    if (status !== "member") {
      next({ path: "" });
    } else {
      next();
    }
  }
};

export default Guards;
