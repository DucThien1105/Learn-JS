




import {
    type_log,
    type_warn,
    type_error
}
from '../const.js';


function logger(log, type = type_log) {
    console[type](log);
};

export default logger;











