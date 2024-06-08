import { Account } from "../models/Account.js";
import { Movement } from "../models/Movement.js";

export const getAccounts = async (req, res) => {
  try {
    const accounts = await Account.findAll();
    res.json(accounts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAccount = async (req, res) => {
  try {
    const { account_number } = req.params;
    const account = await Account.findOne({
      where: {
        account_number,
      },
    });
    res.json(account);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createAccount = async (req, res) => {
  const { account_number, account_type, balance, account_holder } = req.body;

  try {
    const newAccount = await Account.create({
      account_number,
      account_type,
      balance,
      account_holder,
    });

    res.json(newAccount);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAccountMovements = async (req, res) => {
  const { account_number } = req.params;
  const movements = await Movement.findAll({
    where: { account_number: account_number },
  });

  res.json(movements);
};
