import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {FarmTable} from "../entity/FarmTable";

export class FarmController {

    private farmRepository = getRepository(FarmTable);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.farmRepository.find();
    }

}
