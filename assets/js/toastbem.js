
            function toast ({
                title = '',
                message = '',
                type ='info' ,
                duration = 3000
            }) {
                const main =document.getElementById('toast');
                if (main){
                    const toast = document.createElement ('div');

                    // auto remove
                    const autoRemoveToast = setTimeout(function(){
                        main.removeChild(toast);
                    }, duration + 1000);

                    // remove toast when closed
                    toast.onclick = function (e) {
                        if (e.target.closest('.toast__close')){
                            main.removeChild(toast);
                            clearTimeout(autoRemoveToast);
                        }
                    }

                    const icons = {
                        success: 'fas fa-check-circle',
                        info: 'fas fa-info-circle',
                        warning: 'fas fa-exclamation-circle',
                        error: 'fas fa-exclamation-circle',
                        
                    };
                    const icon = icons[type];
                    const delay = (duration / 1000).toFixed(2);

                    toast.classList.add('toast', `toast--${type}`);
                    toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
                    toast.innerHTML = `
                        <div class="toast__icon">
                            <i class="${icon}"></i>
                        </div>
                        <div class="toast__body">
                            <h3 class="toast__title">${title}</h3>
                            <p class="toast__msg">${message}</p>
                        </div>
                        <div class="toast__close">
                            <i class="fas fa-times"></i>
                        </div>
                    `;
                    main.appendChild(toast);
                  
                }
            }

            function showSuccessToast (){
                toast ({
                title:'Thành công!',
                message: 'Chúc mừng bạn đã tạo tài khoản thành công tại web F8.',
                type :'success',
                duration: 5000
            })

            }

            function showErrorToast (){
                toast ({
                title:'Thất bại!',
                message: 'Đã xảy ra lỗi kết nối đến tài khoản của bạn!',
                type :'error',
                duration: 5000
            })

            }
