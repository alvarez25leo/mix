import Vue from 'vue'

Vue.directive('waves-primary', {
    inserted(el, binding, vnode, oldVnode) {
        el.classList.add('waves-primary');
    },
    unbind(el) {
        el.classList.remove('waves-primary');
    },
});

Vue.directive('match-height', {
    inserted(el, binding, vnode, oldVnode) {
        let height = el.clientHeight;
        el.style.height = height + "px";
    },
    unbind(el) {
        el.removeAttribute('style');
    },
});

Vue.directive('has-error', (el, binding) => {
    if (binding.value && Array.isArray(binding.value)) {
        if (binding.value.length) {
            const nodes = el.nextSibling
            if (el.nextSibling) {
                nodes.parentNode.removeChild(nodes)
            }
            el.classList.add('is-invalid')
            el.insertAdjacentHTML("afterend", `<div class="invalid-feedback">${binding.value[0]}</div>`);
        } else {
            if (el.classList.contains("is-invalid")) {
                el.classList.remove("is-invalid")
            }
        }
    } else {
        if (el.classList.contains("is-invalid")) {
            el.classList.remove("is-invalid")
        }
    }
})
