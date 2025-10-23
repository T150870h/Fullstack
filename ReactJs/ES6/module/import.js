import logger, {TYPE_ERROR, TYPE_WARN, TYPE_LOG} from "../module/export.js";
import constant from "../module/constant.js"

logger("message", TYPE_ERROR)
logger("message", TYPE_LOG)
logger("message", TYPE_WARN)