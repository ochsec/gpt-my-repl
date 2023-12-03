import IConfig from "../../types/IConfig.d.ts";
import getConfig from "./getConfig.ts";
import getMemory from "./getMemory.ts";
import getModels from "./getModels.ts";
import setDefaultConfig from "./setDefaultConfig.ts";
import setMaxTokens from "./setMaxTokens.ts";
import setMemory from "./setMemory.ts";
import setModel from "./setModel.ts";
import setTemp from "./setTemp.ts";
import validateModel from "./validateModel.ts";
import validateTemp from "./validateTemp.ts";

const Config: IConfig = {
    getConfig,
    getMemory,
    getModels,
    setDefaultConfig,
    setMaxTokens,
    setMemory,
    setModel,
    setTemp,
    validateModel,
    validateTemp,
};

export default Config;