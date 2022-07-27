import { Seccion } from "../models/Seccion.js";

export async function createSeccion(req, res) {
  try {
    const { Nombre, Min, Max } = req.body;
    const newSeccion = await Seccion.create({
      Nombre, Min, Max
    });
    res.json(newSeccion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getSecciones(req, res) {
  try {
    const seccion = await Seccion.findAll({
      attributes: ["ID","IDPadre" ,"Name", "Min", "Max"],
      order: [["ID", "ASC"]],
    });
    res.json(seccion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateSeccion(req, res) {
  const { id } = req.params;
  try {
    const seccion = await Seccion.findOne({
      attributes: ["ID", "Name", "Min", "Max"],
      where: { id },
    });

    seccion.set(req.body);

    await seccion.save();

    res.json(seccion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteSeccion(req, res) {
  const { id } = req.params;
  try {
    await Seccion.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getSeccion(req, res) {
  const { id } = req.params;
  try {
    const seccion = await Seccion.findOne({
      where: { id },
      attributes: ["ID", "Name"],
    });
    res.json(seccion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
