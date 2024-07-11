"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderStatus = exports.ENUM_NEW_ORDERS_STATUS = void 0;
var ENUM_NEW_ORDERS_STATUS;
(function (ENUM_NEW_ORDERS_STATUS) {
    ENUM_NEW_ORDERS_STATUS[ENUM_NEW_ORDERS_STATUS["ORDER_STATUS_READY"] = 10] = "ORDER_STATUS_READY";
    ENUM_NEW_ORDERS_STATUS[ENUM_NEW_ORDERS_STATUS["ORDER_STATUS_REQUEST_COURIER_LABEL"] = 30] = "ORDER_STATUS_REQUEST_COURIER_LABEL";
    ENUM_NEW_ORDERS_STATUS[ENUM_NEW_ORDERS_STATUS["ORDER_STATUS_WAITING_COURIER_LABEL_GENERATED"] = 31] = "ORDER_STATUS_WAITING_COURIER_LABEL_GENERATED";
    ENUM_NEW_ORDERS_STATUS[ENUM_NEW_ORDERS_STATUS["ORDER_STATUS_WAITING_FOR_PICKING"] = 32] = "ORDER_STATUS_WAITING_FOR_PICKING";
    ENUM_NEW_ORDERS_STATUS[ENUM_NEW_ORDERS_STATUS["ORDER_STATUS_PICKING"] = 33] = "ORDER_STATUS_PICKING";
    ENUM_NEW_ORDERS_STATUS[ENUM_NEW_ORDERS_STATUS["ORDER_STATUS_PICKED"] = 34] = "ORDER_STATUS_PICKED";
    ENUM_NEW_ORDERS_STATUS[ENUM_NEW_ORDERS_STATUS["ORDER_STATUS_FULFILLING"] = 35] = "ORDER_STATUS_FULFILLING";
    ENUM_NEW_ORDERS_STATUS[ENUM_NEW_ORDERS_STATUS["ORDER_STATUS_TO_RECHECK"] = 36] = "ORDER_STATUS_TO_RECHECK";
    ENUM_NEW_ORDERS_STATUS[ENUM_NEW_ORDERS_STATUS["ORDER_STATUS_RECHECKING"] = 37] = "ORDER_STATUS_RECHECKING";
    ENUM_NEW_ORDERS_STATUS[ENUM_NEW_ORDERS_STATUS["ORDER_STATUS_TO_SIGN_OFF"] = 38] = "ORDER_STATUS_TO_SIGN_OFF";
    ENUM_NEW_ORDERS_STATUS[ENUM_NEW_ORDERS_STATUS["ORDER_STATUS_SHIPPED"] = 50] = "ORDER_STATUS_SHIPPED";
})(ENUM_NEW_ORDERS_STATUS = exports.ENUM_NEW_ORDERS_STATUS || (exports.ENUM_NEW_ORDERS_STATUS = {}));
function getOrderStatus(status) {
    if (Array.isArray(status))
        return status.map((s) => ENUM_NEW_ORDERS_STATUS[s]);
    if (typeof status === 'number')
        return ENUM_NEW_ORDERS_STATUS[status];
    return ENUM_NEW_ORDERS_STATUS[status];
}
exports.getOrderStatus = getOrderStatus;
exports.default = {
    ENUM_NEW_ORDERS_STATUS,
    getOrderStatus,
};
