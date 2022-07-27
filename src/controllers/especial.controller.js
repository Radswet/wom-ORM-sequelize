import { Especial } from "../models/Especial.js";

export async function createEspecial(req, res) {
  try {
    const { IDTemplate, IDSeccion, Tipo, Nombre, Consulta } = req.body;
    const newEspecial = await Especial.create({
      IDTemplate,
      IDSeccion,
      Tipo,
      Nombre,
      Consulta,
    });
    res.json(newEspecial);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getEspeciales(req, res) {
  try {
    const especial = await Especial.findAll({
      attributes: ["ID", "IDTemplate", "IDSeccion", "Tipo", "Nombre", "Consulta"],
      order: [["ID", "ASC"]],
    });
    res.json(especial);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateEspecial(req, res) {
  const { id } = req.params;
  try {
    const especial = await Especial.findOne({
      attributes: ["ID", "IDTemplate", "IDSeccion", "Tipo", "Nombre", "Consulta"],
      where: { id },
    });

    especial.set(req.body);

    await especial.save();

    res.json(especial);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteEspecial(req, res) {
  const { id } = req.params;
  try {
    await Especial.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getEspecial(req, res) {
  const { id } = req.params;
  try {
    const especial = await Especial.findOne({
      where: { id },
      attributes: ["ID", "IDTemplate", "IDSeccion","Tipo", "Nombre", "Consulta"],
    });
    res.json(especial);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
