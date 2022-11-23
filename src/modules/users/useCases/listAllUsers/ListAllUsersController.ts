/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IRequest {
  user_id?: string;
}


class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {

    const { user_id } = request.headers;

    try {
      const all = this.listAllUsersUseCase.execute({ user_id } as IRequest);
      return response.status(201).json(all);
    } catch (error) {
      return response.status(400).json({ "error": error.message });
    }

  }
}

export { ListAllUsersController };
