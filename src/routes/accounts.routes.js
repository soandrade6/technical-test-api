import Router from "express";
import { createAccount, getAccountMovements, getAccounts } from "../controllers/account.controller";

const router = Router()

router.get("/accounts", getAccounts);
router.post("/accounts", createAccount);
router.get("/movements/:account_number", getAccountMovements);

export default router;
