import React from "react";
import { connect } from "react-redux";
import {
  addPaymentCompany,
  addPaymentType,
  editStep,
} from "../../../../store/actions/adviceAction";

const PaymentWidget = ({
  advice,
  editStep,
  addPaymentCompany,
  addPaymentType,
}) => {
  return (
    <div>
      <div style={{ display: advice.step >= 7 ? "flex" : "none" }}>
        <div>
          <div>Select Payment Mode</div>
          <div>
            <select
              value={advice.paymentType}
              onChange={(e) => {
                e.target.value === "cash"
                  ? advice.isIPDPackage
                    ? editStep({ step: 10 })
                    : editStep({ step: 9 })
                  : editStep({ step: 8 });
                addPaymentType({ paymentType: e.target.value });
              }}
            >
              <option value="" label="Payment Mode" />
              <option value="cash" label="Cash" />
              <option value="echg-cghs" label="ECHG/CGHS" />
              <option value="insurance" label="Insurance" />
            </select>
          </div>
        </div>
      </div>
      {/* payment company */}
      <div
        style={{
          display:
            advice.step >= 8 && advice.paymentType !== "cash" ? "flex" : "none",
        }}
      >
        <div>
          <div>Select Payment Company</div>
          <div>
            <select
              value={advice.paymentCompany}
              onChange={(e) => {
                advice.isIPDPackage
                  ? editStep({ step: 10 })
                  : editStep({ step: 9 });
                addPaymentCompany({ paymentCompany: e.target.value });
              }}
            >
              <option value="" label="Select Insurance Company" />
              <option value="Insurance_1" label="Insurance_1" />
              <option value="Insurance_2" label="Insurance_1" />
              <option value="Inusrance_3" label="Insurance_1" />
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    advice: state.advice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editStep: (item) => dispatch(editStep(item)),
    addPaymentType: (item) => dispatch(addPaymentType(item)),
    addPaymentCompany: (item) => dispatch(addPaymentCompany(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentWidget);
