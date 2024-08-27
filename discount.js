document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('discount-row').addEventListener('click', function(e){
        if (e.target.classList.contains('discount')) {
            e.preventDefault();

            const code = e.target.dataset['code'];
            const product = e.target.dataset['product'];
            document.getElementById('product').innerHTML = product;
            document.getElementById('discount-code').innerHTML = code;

            const toastEl = document.getElementById('liveToast');
            const toast = bootstrap.Toast.getOrCreateInstance(toastEl);
            toast.show();
          }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const toastElement = document.getElementById('liveToast');
            const toast = bootstrap.Toast.getInstance(toastElement);
            toast.hide();
        }
    });
  });