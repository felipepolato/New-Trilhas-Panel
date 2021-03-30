import React from "react";

export default class ComponentsAccounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="row">
          <div className="col6">
            <row>
              {RepresentanteBox(
                "Lígia",
                "Rodrigues",
                data,
                ligiaAprovados,
                ligiaReprovados,
                ligiaNegociando
              )}
            </row>
          </div>
        </div>
      </div>
    );
  }
}
