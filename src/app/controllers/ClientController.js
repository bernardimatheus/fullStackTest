import Client from '../models/Client';

class ClientController {
  async index(req, res) {
    const clients = await Client.findAll();

    return res.json(clients);
  }

  async store(req, res) {
    const clientExists = await Client.findOne({
      where: { email: req.body.email },
    });

    const cpfExists = await Client.findOne({
      where: { cpf: req.body.cpf },
    });

    if (clientExists || cpfExists) {
      return res.status(400).json({
        error: 'Client already exists',
      });
    }

    const client = await Client.create(req.body);
    return res.json(client);
  }

  async show(req, res) {
    const client = await Client.findOne({
      where: { id: req.params.id },
    });

    if (client) {
      return res.json(client);
    }

    return res.status(404).json({
      message: 'Not found',
    });
  }

  async update(req, res) {
    const client = await Client.findOne({
      where: { id: req.params.id },
    });

    if (req.body.email && client.email !== req.body.email) {
      const emailExists = await Client.findOne({
        where: { email: req.body.email },
      });

      if (emailExists) {
        return res.status(400).json({
          message: 'Already exists',
        });
      }
    }

    if (req.body.cpf && client.cpf !== req.body.cpf) {
      const cpfExists = await Client.findOne({
        where: { cpf: req.body.cpf },
      });
      if (cpfExists) {
        return res.status(400).json({
          message: 'Already exists',
        });
      }
    }

    if (client) {
      const updatedClient = await client.update(req.body);
      return res.json(updatedClient);
    }

    return res.status(404).json({
      message: 'Not found',
    });
  }

  async delete(req, res) {
    const client = await Client.findOne({
      where: { id: req.params.id },
    });
    if (client) {
      await client.destroy();
      return res.json({
        message: 'Deleted',
      });
    }

    return res.status(404).json({
      message: 'Not found',
    });
  }
}

export default new ClientController();
