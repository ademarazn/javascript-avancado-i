class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
    Object.freeze(this);
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  get negociacoes() {
    // return [...this._negociacoes];
    return [].concat(this._negociacoes);
  }

  esvazia() {
    this._negociacoes = [];
  }
}
