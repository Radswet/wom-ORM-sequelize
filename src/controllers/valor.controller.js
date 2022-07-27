import { Valor } from "../models/Valor.js";

export async function createValor(req, res) {
  try {
    const { Valor, IDInput } = req.body;
    const newValor = await Valor.create({
      Valor, IDInput,
    });
    res.json(newValor);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getValores(req, res) {
  try {
    const valor = await Valor.findAll({
      attributes: ["ID", "Valor" ,"IDInput"],
      order: [["ID", "ASC"]],
    });
    res.json(valor);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateValor(req, res) {
  const { id } = req.params;
  try {
    const valor = await Valor.findOne({
      attributes: ["ID", "Valor", "IDInput"],
      where: { id },
    });

    valor.set(req.body);

    await valor.save();

    res.json(valor);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteValor(req, res) {
  const { id } = req.params;
  try {
    await Valor.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getValor(req, res) {
  const { id } = req.params;
  try {
    const valor = await Valor.findOne({
      where: { id },
      attributes: ["ID", "Valor", "IDInput"],
    });
    res.json(valor);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
