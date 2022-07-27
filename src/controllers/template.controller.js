import { Template } from "../models/Template.js";

export async function createTemplate(req, res) {
  try {
    const { Name } = req.body;
    const newTemplate = await Template.create({
      Name,
    });
    res.json(newTemplate);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getTemplates(req, res) {
  try {
    const template = await Template.findAll({
      attributes: ["ID", "Name"],
      order: [["ID", "ASC"]],
    });
    res.json(template);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateTemplate(req, res) {
  const { id } = req.params;
  try {
    const template = await Template.findOne({
      attributes: ["ID", "Name"],
      where: { id },
    });

    template.set(req.body);

    await template.save();

    res.json(template);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteTemplate(req, res) {
  const { id } = req.params;
  try {
    await Template.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getTemplate(req, res) {
  const { id } = req.params;
  try {
    const template = await Template.findOne({
      where: { id },
      attributes: ["ID", "Name"],
    });
    res.json(template);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
