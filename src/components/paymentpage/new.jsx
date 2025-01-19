const PinPopup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 40;
  text-align: center;
  width: 250px;

  .popupButton {
    display: flex;
    justify-content: center;
    gap: 10px;

    button {
      background-color: rgba(27, 99, 146, 1);
      color: white;
      border: none;
      border-radius: 2px;
      padding: 8px 12px;
      margin-top: 10px;
    }
  }
`;

const PinInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const PinInputBox = styled.input`
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 24px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 0 5px;
  color: #333;
  font-weight: bold;
  background-color: #f9f9f9;
  &::placeholder {
    color: transparent;
  }
  &:focus {
    outline: none;
    border-color: #fa8232;
  }
`;

const PinPopupComponent = ({ setPin }) => {
  const [pinInputs, setPinInputs] = useState(["", "", "", ""]);

  const handlePinInputChange = (e, index) => {
    const value = e.target.value;
    if (value.length <= 1 && /^[0-9]$/.test(value)) {
      const newPinInputs = [...pinInputs];
      newPinInputs[index] = value;
      setPinInputs(newPinInputs);
      setPin(newPinInputs.join(""));
      if (index < 3 && value) {
        // Move to the next input
        document.getElementById(`pin-${index + 1}`).focus();
      }
    }
  };

  const handlePinBackspace = (index) => {
    if (index > 0) {
      const newPinInputs = [...pinInputs];
      newPinInputs[index] = "";
      setPinInputs(newPinInputs);
      setPin(newPinInputs.join(""));
      document.getElementById(`pin-${index - 1}`).focus();
    }
  };

  return (
    <PinPopup>
      <h3>Enter Transaction PIN</h3>

      <PinInputContainer>
        {pinInputs.map((digit, index) => (
          <PinInputBox
            key={index}
            id={`pin-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handlePinInputChange(e, index)}
            onFocus={(e) => e.target.select()}
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                handlePinBackspace(index);
              }
            }}
          />
        ))}
      </PinInputContainer>

      <PinGrid>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "x"].map((num) => (
          <PinButton
            key={num}
            onClick={() => {
              if (num === "x") {
                setPin((prev) => prev.slice(0, -1));
              } else {
                handlePinInputChange({ target: { value: num } }, pinInputs.findIndex((val) => val === ""));
              }
            }}
          >
            {num === "x" ? "⌫" : num}
          </PinButton>
        ))}
      </PinGrid>

      <SendButton onClick={handlePinSubmit}>Submit PIN</SendButton>
      <XIcon onClick={() => setShowPinPopUp(false)}>✕</XIcon>
    </PinPopup>
  );
};
