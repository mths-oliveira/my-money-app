import axios from "axios";
import { toastr } from "react-redux-toastr";
import { initialize } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";

const BASE_URL = "http://localhost:3003/api";
const INITIAL_VALUES = { credits: [{}], debts: [{}] };

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);

  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request,
  };
}

export const create = (values) => submit(values, "post");

export const update = (values) => submit(values, "put");

export const remove = (values) => submit(values, "delete");

function submit(values, method) {
  return (dispatch) => {
    const id = values._id ? values._id : "";

    try {
      axios[method](`${BASE_URL}/billingCycles/${id}`, values).then(() => {
        toastr.success("Sucesso", "Operação Realizada com sucesso.");
        dispatch(init());
      });
    } catch (err) {
      err.response.data.errors.forEach((error) => toastr.error("Erro", error));
    }
  };
}

export function showUpdate(billingCycle) {
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("billingCycleForm", billingCycle),
  ];
}

export function showDelete(billingCycle) {
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
    initialize("billingCycleForm", billingCycle),
  ];
}

export function init() {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(),
    initialize("billingCycleForm", INITIAL_VALUES),
  ];
}
