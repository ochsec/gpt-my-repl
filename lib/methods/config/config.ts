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

export default class Config {
    static getConfig = getConfig;
    static getMemory = getMemory;
    static getModels = getModels;
    static setDefaultConfig = setDefaultConfig;
    static setMaxTokens = setMaxTokens;
    static setMemory = setMemory;
    static setModel = setModel;
    static setTemp = setTemp;
    static validateModel = validateModel;
    static validateTemp = validateTemp;
}