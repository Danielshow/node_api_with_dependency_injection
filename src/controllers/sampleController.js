class sampleController {
  /**
   * Login to auth service
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {function} next - caback function
   *
   */
  async login(req, res) {
    const sampleService = req.scope.resolve("sampleService");
    const data = await sampleService.login();
    res.status(200).json(data);
  }
}

export default new sampleController();
