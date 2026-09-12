document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registration-form');
  const feedback = document.getElementById('form-feedback');
  const NameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const ethicsCheck = document.getElementById('ethics-check');
  const ethicsError = document.getElementById('ethics-error');
  
  const submitBtn = document.getElementById('submit-btn');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoader = submitBtn.querySelector('.btn-loader');

  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    clearMessages();

    const Name = NameInput.value.trim();
    const email = emailInput.value.trim();
    const acceptsEthics = ethicsCheck.checked;


    const errors = [];

    if (Name.length < 4 || Name.length > 15) {
      errors.push('El Nombre o Alias debe tener entre 4 y 15 caracteres.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('Por favor, ingresa un correo electrónico válido.');
    }

    if (!acceptsEthics) {
      ethicsError.textContent = 'Debes aceptar el compromiso ético para continuar.';
      errors.push('Debes aceptar los términos éticos.');
    }
    
    const formData = {
      teamName: Name,
      email,
      acceptEthics: acceptsEthics,
      createdAt: new Date().toISOString()
    };

    if (errors.length > 0) {
      showFeedback(errors.join('<br>'));
      console.log(errors);
      console.log(formData);
      return;
    }


    setLoading(true);

    try {
      console.log('Datos validados exitosamente:', formData);
      
      showFeedback('¡Registro realizado con éxito!', false);
      form.reset();

      setTimeout(() => {
        window.location.href = 'competencias.html';
      }, 1500);

    } catch (error) {
      showFeedback('Ocurrió un error al procesar el registro. Inténtalo de nuevo.');
      setLoading(false);
    }
  });

  function clearMessages() {
    feedback.innerHTML = '';
    feedback.classList.add('hidden');
    ethicsError.textContent = '';
  }

  function showFeedback(message, isError = true) {
    feedback.innerHTML = message;
    feedback.classList.remove('hidden');
  }

  function setLoading(isLoading) {
    if (isLoading) {
      submitBtn.disabled = true;
      btnLoader.classList.remove('hidden');
      btnText.textContent = 'Procesando...';
    } else {
      submitBtn.disabled = false;
      btnLoader.classList.add('hidden');
      btnText.textContent = 'Confirmar Registro';
    }
  }
});