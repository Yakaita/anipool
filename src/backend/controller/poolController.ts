import poolService from '@backend/service/poolService';
import { NextApiRequest, NextApiResponse } from 'next';

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    if (id) {
      const pool = await poolService.get(String(id));
      return res.status(200).send(pool);
    }

    return res.status(400).send('');
  } catch (error) {
    console.log(error);
    return res.status(500).send('');
  }
};

const createPool = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { title, endDate, options, multiOptions } = req.body;
    if (title && endDate && options && multiOptions != null) {
      const poolId = await poolService.createAndReturnId({
        title,
        endDate,
        options,
        multiOptions,
      });

      return res.status(200).send(poolId);
    }
    return res.status(400).send('');
  } catch (error) {
    console.log(error);
    return res.status(500).send('');
  }
};

const poolController = {
  get,
  createPool,
};

export default poolController;