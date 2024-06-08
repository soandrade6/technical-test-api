import { Movement } from "../models/Movement.js";

export const getMovements = async (re, res) => {
  try {
    const movements = await Movement.findAll();
    res.json(movements);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createMovement = async (req, res) => {
    
    try {
        const {transaction_value, account_number, date} = req.body

    const newMovement = await Movement.create({
       transaction_value,
       account_number,
       date
        
    })

    res.json(newMovement)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};