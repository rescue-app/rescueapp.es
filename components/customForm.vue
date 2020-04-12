<template>
    <div class="form-wrapper">
        <transition-group name="fade">
            <!--To be deleted when it is done-->
            <h5 :key="'step' + step">{{ step }}</h5>

            <div v-if="step !== -1" :key="'form-wrapper'">
                <h6 :key="'text' + step">{{ currentStepInfo.text }}</h6>

                <b-button :key="'button' + step + option.text"
                          v-for="option in getInputOptions()"
                          @click="storeOptionInfo(option)"
                >
                    {{ option.text }}
                </b-button>

                <b-select :key="'select' + step" v-if="currentStepInfo.input === 'select'" @change="storeStepInfo(currentStepInfo)" :ref="currentStepInfo.id">
                    <option v-for="option in currentStepInfo.options" :value="option" :key="currentStepInfo.id + option">{{ option }}</option>
                </b-select>

                <b-input :key="'input' + step" type="text" v-if="isTextInput()" :ref="currentStepInfo.id" :placeholder="currentStepInfo.placeholder"></b-input>

                <b-input :key="'number' + step" type="number" v-if="isNumberInput()" :ref="currentStepInfo.id" :placeholder="currentStepInfo.placeholder"></b-input>

                <b-input :key="'email' + step" type="email" v-if="isEmailInput()" :ref="currentStepInfo.id" :placeholder="currentStepInfo.placeholder"></b-input>

                <b-button v-if="currentStepInfo.input !== 'button' && currentStepInfo.input !== 'select'" @click="storeStepInfo(currentStepInfo)">Aceptar</b-button>
            </div>

            <div v-else :key="'thanks-wrapper'">
                ¡Muchas gracias !

                Te contactaremos lo antes posible para verificar y validar tu solicitud.

                Comparte Rescue app en tus redes sociales y con la ayuda de todos saldremos adelante!

                #StopCorona
            </div>
        </transition-group>

        <div class="navigation-wrapper">
            <b-button class="btn-navigate" variant="outline-primary" :disabled="step <= 1 || step === -1" @click="goToStep(step - 1)"> ▲ </b-button>
            <b-button class="btn-navigate" variant="outline-primary" :disabled="step >= stepsNumber || step === -1" @click="goToStep(step + 1)"> ▼ </b-button>
        </div>

    </div>
</template>

<script>
import formDefinition from '@/assets/formDefinition.json'

export default {
    data: () => ({
        step: 1,
        stepsNumber: 1,
        formDefinition: [],
        currentStepInfo: {},
        formData: {
            Tipo__c: null,
            Oferta_1__c: null,
            Cantidad_oferta_1__c: null,
            Otros_oferta_1__c: null,
            Descripcion_oferta_1__c: null,
            Otra_oferta_1__c: null,
            Oferta_2__c: null,
            Otros_oferta_2__c: null,
            Cantidad_oferta_2__c: null,
            Descripcion_oferta_2__c: null,
            Otra_oferta_2__c: null,
            Oferta_3__c: null,
            Otros_oferta_3__c: null,
            Cantidad_oferta_3__c: null,
            Descripcion_oferta_3__c: null,
            Otra_oferta_3__c: null,
            Quien_eres_1__c: null,
            Nombre_de_empresa__c: null,
            Persona_de_contacto__c: null,
            Telefono__c: null,
            Email__c: null,
            Ciudad__c: null,
            Cdigo_postal__c: null,
            Direccion__c: null,
            Unirte__c: null,
            Necesidad_1__c: null,
            Otros_1__c: null,
            Cantidad_1__c: null,
            Descripcion_1__c: null,
            Otra_necesidad_1__c: null,
            Necesidad_2__c: null,
            Otros_2__c: null,
            Cantidad_2__c: null,
            Descripcion_2__c: null,
            Otra_necesidad_2__c: null,
            Necesidad_3__c: null,
            Otros_3__c: null,
            Cantidad_3__c: null,
            Descripcion_3__c: null,
            Otra_necesidad_3__c: null

        }
    }),
    mounted () {
        this.formDefinition = formDefinition
        this.stepsNumber = formDefinition.length
        this.addCurrentStepInfo()
    },
    methods: {
        isTextInput () {
            return this.currentStepInfo.input === 'text'
        },
        isNumberInput () {
            return this.currentStepInfo.input === 'number'
        },
        isEmailInput () {
            return this.currentStepInfo.input === 'email'
        },
        getInputOptions () {
            if (this.currentStepInfo.input !== 'button') {
                return []
            }

            return this.currentStepInfo.options
        },
        goToStep (step) {
            if (step === -1) {
                this.submitForm()
            }

            this.step = step
            this.addCurrentStepInfo()
        },
        addCurrentStepInfo () {
            for (let i = 0; i < this.formDefinition.length; i++) {
                if (this.formDefinition[i].step === this.step) {
                    this.currentStepInfo = this.formDefinition[i]
                }
            }
        },
        storeOptionInfo (option) {
            this.formData[this.currentStepInfo.id] = option.text
            this.goToStep(option.next)
        },
        storeStepInfo () {
            this.formData[this.currentStepInfo.id] = this.$refs[this.currentStepInfo.id].localValue
            this.goToStep(this.currentStepInfo.next)
        },
        submitForm () {
            // TODO uncomment to do the real submit
            // console.log(this.formData)

            // const jsnAuthResponse = fetch('https://login.salesforce.com/services/oauth2/token?grant_type=password&client_id=3MVG9wEVwV0C9ejCCh0zY_0PN_gyc4yX8CRvov1jfcSXqjIMYlb67v6i1oVPTjH.9Rhc8lRbpaxvVRT4FjOpg&client_secret=264491B8AA0CC4066707EFEFDF76386D7B393B7991D40D75CE325A63CE9D7D03&username=dani@rescueapp.es&password=Corona2020', {
            //     method: 'post'
            // })
            // const jsnAuth = JSON.parse(jsnAuthResponse)
            //
            // fetch('https://rescueapp.my.salesforce.com/services/data/v20.0/sobjects/typeform__c/', {
            //     method: 'post',
            //     headers: {
            //         Authorization: 'Bearer ' + jsnAuth.access_token,
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(this.formData)
            // })
            //     .then(res => res.json())
            //     .then(res => console.log(res))
        }
    }
}
</script>

<style>
    .fade-enter-active {
        transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .form-wrapper {
        padding: 2rem;
    }

    .form-wrapper button:not(.btn-navigate) {
        margin: 1rem;
    }

    .btn-navigate, .btn-navigate:hover, .btn-navigate:disabled {
        position: relative;
        font-family: inherit;
        font-weight: 700;
        cursor: pointer;
        width: 36px;
        min-width: 36px;
        height: 32px;
        -webkit-box-pack: center;
        justify-content: center;
        background-color: rgb(79, 169, 179);
        color: rgb(1, 2, 2);
        transition: background-color 0.2s ease 0s, color 0.2s ease 0s, border-color 0.2s ease 0s, opacity 0.2s ease 0s;
        outline: none;
        margin: 0;
        padding: 0;
        border-width: 1px;
        border-style: solid;
        border-image: initial;
        border-color: transparent;
        border-radius: 4px 0 0 4px;
    }

    .btn-navigate:hover, .btn-navigate:disabled {
        background-color: rgb(105, 182, 190);
    }

    .btn-navigate:disabled {
        background-color: rgba(105, 182, 190, 0.3);
    }

    .btn-navigate:last-of-type {
        border-radius: 0 4px 4px 0;
        transform: translateX(-5px);
        border-left: 1px solid grey;
    }

    .navigation-wrapper {
        text-align: right;
        padding: 1.5rem;
    }
</style>
