function addingEventListener() {
    const input = document.getElementById('input');
  
    function clickAlert() {
      alert('I was clicked!');
    }
  
    input.addEventListener('click', clickAlert);
  }
  
  const sinon = require('sinon');
  let input;
  
  beforeEach(function () {
    input = document.getElementById('input');
    sinon.spy(input, 'addEventListener');
  })
  
  it("binds an event listener in addingEventListener()", () => {
    addingEventListener();
    expect(input.addEventListener.called).to.be.true;
  })
  
