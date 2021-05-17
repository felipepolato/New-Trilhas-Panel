import React from "react";

import { fire } from "../GlobalComponents/config";
import { FileInput, file } from "../GlobalComponents/Form/FileInput";

export default class Teste extends React.Component {
  constructor(props) {
      super(props);
    this.state = {
      toRender: []
    };
  }

  componentDidMount() {
    fire
      .database()
      .ref('/')
      .on('value', snapshot => {
        let tmp = snapshot.val();

        let renderTmp = [];

        let clientesTmp = tmp['clientes'];
        let clientes = [];
        
        for(let loop in clientesTmp) {
          if(clientesTmp[loop][0]['cidade'] !== 'Bertioga') {
            clientes.push(clientesTmp[0]['cidade']);
          }
        }
        
        let categoriasTmp = tmp['categorias'];
        let categorias = [];
        let countSegments = 0;
        let countCategories = 0;

        let nichos = [];

        for(let loop in categoriasTmp) {
          //console.log(loop);
          let count = 0;
          let nicho = '';

          countCategories++;
          for(let loop2 in categoriasTmp[loop]['segments']) {
            let Separador = loop.toLowerCase() + '_' + loop2.toLowerCase();
            countSegments++;
            nicho = loop2;

            for(let loop3 in clientesTmp) {
              for(let loop4 in clientesTmp[loop3][1]) {
                if(loop4.toLowerCase() === Separador) {
                  count++;         
                  console.log(Separador + count);
                }
              }
            }
            nichos.push({
              nome: nicho,
              categoria: loop,
              quantidade: count
            });
          }

        }

        console.log(nichos);

        console.log('Quantidade de clientes [ S/ Bertioga ]: ' + clientes.length);
        console.log('Quantidade de clientes [ C/ Bertioga ]: ' + clientesTmp.length);
        console.log('Quantidade de categorias: ' + countCategories);
        console.log('Quantidade de nichos: ' + countSegments);

      });
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
