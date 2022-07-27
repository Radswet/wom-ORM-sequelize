import { Input } from "../models/Input.js";

export async function createInput(req, res) {
  try {
    const { Nombre , Tipo , Mandatorio, IDTemplate, IDSeccion } = req.body;
    const newInput = await Input.create({
      Nombre, Tipo, Mandatorio, IDTemplate, IDSeccion 
    });
    res.json(newInput);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getInputs(req, res) {
  try {
    const input = await Input.findAll({
      attributes: ["ID", "Nombre", "Tipo", "Mandatorio","IDTemplate","IDSeccion"],
      order: [["ID", "ASC"]],
    });
    res.json(input);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateInput(req, res) {
  const { id } = req.params;
  try {
    const input = await Input.findOne({
      attributes: ["ID", "Nombre", "Tipo", "Mandatorio"],
      where: { id },
    });

    input.set(req.body);

    await input.save();

    res.json(input);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteInput(req, res) {
  const { id } = req.params;
  try {
    await Input.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getInput(req, res) {
  const { id } = req.params;
  try {
    const input = await Input.findOne({
      where: { id },
      attributes: ["ID", "Nombre", "Tipo", "Mandatorio"],
    });
    res.json(input);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
