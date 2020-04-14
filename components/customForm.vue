<template>
    <div class="form-wrapper">
        <transition-group name="fade">
            <div v-if="step !== -1" :key="'form-wrapper'">
                <h5 class="step-title" :key="'text' + step">{{ stepProps.text }}</h5>

                <b-button :key="'button' + step + option.text"
                          class="form-button"
                          v-for="option in getInputOptions()"
                          @click="storeOptionInfo(option)"
                >
                    {{ option.text }}
                </b-button>

                <b-select :key="'select' + step" v-if="stepProps.input === 'select'" @change="storeStepInfo(stepProps)" :ref="stepProps.id">
                    <option v-for="option in stepProps.options" :value="option" :key="stepProps.id + option">{{ option }}</option>
                </b-select>

                <b-input :key="'input' + step" type="text" :list="stepProps.id" v-if="isTextInput()" :ref="stepProps.id" :placeholder="stepProps.placeholder" @keyup.enter="storeStepInfo(stepProps)"></b-input>

                <datalist :id="stepProps.id" v-if="isTextInput()">
                    <option v-for="option in stepProps.options" :key="stepProps.id + option">{{ option }}</option>
                </datalist>

                <b-input :key="'number' + step" type="number" v-if="isNumberInput()" :ref="stepProps.id" :placeholder="stepProps.placeholder" @keyup.enter="storeStepInfo(stepProps)"></b-input>

                <b-input :key="'email' + step" type="email" v-if="isEmailInput()" :ref="stepProps.id" :placeholder="stepProps.placeholder" @keyup.enter="storeStepInfo(stepProps)"></b-input>

                <b-button class="form-button accept-button" v-if="shouldDisplayAcceptButton()" @click="storeStepInfo(stepProps)">Aceptar</b-button>

                <div v-if="isNoneInput() && stepProps.name === 'psicologo'">
                    <div>
                        <span class="step-title">
                            Si está atravesando una situación complicada, el Colegio Oficial de Psicología de Madrid ha puesto en marcha un nuevo Servicio de Atención Psicológica ante el Coronavirus<br><br>Interesados, por favor llamar al <strong>91 700 79 88</strong><br><br><em>*Destinado tanto a personas que estén contagiadas y que estén hospitalizadas o pasando la enfermedad aislados en su domicilio, como a trabajadores de cualquier ámbito que se vean afectados, o simplemente a personas que estén atravesando situaciones de estrés o ansiedad por el aislamiento domiciliario.</em>
                        </span>
                    </div>
                    <img src="@/assets/images/psicologos.png" alt="psicologos" />
                </div>

                <div v-if="isNoneInput() && stepProps.name === 'donacion'">
                    <div>
                        <h6 class="step-title">Puedes realizar tu donación en https://www.contraelcoronavirus.org/helpup</h6>
                    </div>
                    <img src="@/assets/images/donacion.jpeg" alt="donaciones" />
                </div>
                <b-button class="form-button accept-button" v-if="isNoneInput()" @click="goToStep(stepProps.next)">Continuar</b-button>
            </div>

            <div v-else :key="'thanks-wrapper'" class="step-title">
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
        stepProps: {},
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
        this.addstepProps()
    },
    methods: {
        isTextInput () {
            return this.stepProps.input === 'text'
        },
        isNumberInput () {
            return this.stepProps.input === 'number'
        },
        isEmailInput () {
            return this.stepProps.input === 'email'
        },
        isNoneInput () {
            return this.stepProps.input === 'none'
        },
        shouldDisplayAcceptButton () {
            return this.isTextInput() || this.isNumberInput() || this.isEmailInput()
        },
        getInputOptions () {
            if (this.stepProps.input !== 'button') {
                return []
            }

            return this.stepProps.options
        },
        goToStep (step) {
            if (step === -1) {
                this.submitForm()
            }

            this.step = step
            this.addstepProps()
        },
        addstepProps () {
            for (let i = 0; i < this.formDefinition.length; i++) {
                if (this.formDefinition[i].step === this.step) {
                    if (this.formDefinition[i].condition) {
                        const condition = this.formDefinition[i].condition
                        if (this.formData[condition.id] !== condition.value) {
                            this.goToStep(this.formDefinition[i].next)
                            break
                        }
                    }
                    this.stepProps = this.formDefinition[i]
                }
            }
        },
        storeOptionInfo (option) {
            this.formData[this.stepProps.id] = option.text
            this.goToStep(option.next)
        },
        storeStepInfo () {
            this.formData[this.stepProps.id] = this.$refs[this.stepProps.id].localValue
            this.goToStep(this.stepProps.next)
        },
        getStock () {
            const isOffer = this.formData.Tipo__c === 'Ofrezco'

            return {
                quantity: isOffer ? this.formData.Cantidad_oferta_1__c : this.formData.Cantidad_1__c,
                type: this.formData.Tipo__c === 'Ofrezco' ? 'offer' : 'need',
                details: isOffer ? this.formData.Descripcion_oferta_1__c : this.formData.Descripcion_1__c,
                other: null
            }
        },
        submitForm () {
            const stock = this.getStock()

            const data = {
                name: this.formData.Persona_de_contacto__c,
                email: this.formData.Email__c,
                account: this.formData.Persona_de_contacto__c,
                city: this.formData.Ciudad__c,
                join: this.formData.Unirte__c === 'Si',
                phone: this.formData.Telefono__c,
                postalCode: this.formData.Cdigo_postal__c,
                street: this.formData.Direccion__c,
                contactType: this.formData.Quien_eres_1__c,
                challenge: 'to-be-set-by-recaptcha',
                stocks: [
                    stock
                ]
            }

            fetch(
                'https://api.rescueapp.es/request?test=1',
                {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then((res) => { res.json(); console.log(res) })
                .catch((error) => {
                    console.error('Error:', error)
                })
                .then((response) => {
                    console.log('Success:', response)
                })
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

    .step-title {
        color: rgb(79, 169, 179);
    }

    .option-button {
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

    .form-button, .form-button:hover, .form-button:focus {
        display: inline-block;
        margin: 1rem;
        position: relative;
        font-family: inherit;
        font-weight: 700;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.1) 0 3px 12px 0;
        min-height: 40px;
        background-color: rgb(79, 169, 179);
        color: rgb(1, 2, 2);
        transition: background-color 0.2s ease 0s, color 0.2s ease 0s, border-color 0.2s ease 0s, opacity 0.2s ease 0s;
        outline: none;
        border-width: 1px;
        border-style: solid;
        border-image: initial;
        padding: 6px 14px;
        border-color: transparent;
        border-radius: 4px;
    }

    .form-button.accept-button, .form-button.accept-button:hover, .form-button.accept-button:focus {
        display: block;
        margin: 1rem 0;
    }

    .navigation-wrapper {
        text-align: right;
        padding: 1.5rem;
    }
</style>
