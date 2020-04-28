<template>
    <div class="form-wrapper">
        <transition-group name="fade">
            <div v-if="step !== -1 && !displayCaptcha" :key="'form-wrapper'" :class="{'submitted': submittedField}">
                <h5 class="step-title" :key="'text' + step">{{ stepProps.text }}</h5>

                <div class="error" v-if="stepProps.error">{{ stepProps.error }}</div>

                <b-button :key="'button' + step + option.text"
                          class="form-button"
                          v-for="option in getInputOptions()"
                          @click="storeOptionInfo(option)"
                >
                    {{ option.text }}
                </b-button>

                <b-input :key="'input' + stepProps.input + step"
                         :list="stepProps.id"
                         :type="stepProps.input"
                         :value="formData[stepProps.id]"
                         :min="stepProps.min"
                         :max="stepProps.max"
                         :minlength="stepProps.minlength"
                         :maxlength="stepProps.maxlength"
                         v-if="isNumberInput() || isEmailInput() || isTextInput() || isTelInput()"
                         :ref="stepProps.id"
                         :placeholder="stepProps.placeholder"
                         @keyup.enter="storeStepInfo(stepProps)"
                         required
                >
                </b-input>

                <datalist :id="stepProps.id" v-if="isTextInput()" :key="'list' + step">
                    <option v-for="option in stepProps.options" :key="stepProps.id + option">{{ option }}</option>
                </datalist>

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
                        <h6 class="step-title">Puedes realizar tu donación en <a target="_blank" href="https://www.contraelcoronavirus.org/helpup">https://www.contraelcoronavirus.org/helpup</a></h6>
                    </div>
                    <img src="@/assets/images/donacion.jpeg" alt="donaciones" />
                </div>
                <b-button class="form-button accept-button" v-if="isNoneInput()" @click="goToStep(stepProps.next)">Continuar</b-button>
            </div>

            <div v-else-if="!displayCaptcha && step === -1" :key="'thanks-wrapper'" class="step-title thanks-wrapper">
                ¡Muchas gracias !

                Te contactaremos lo antes posible para verificar y validar tu solicitud.

                Comparte Rescue app en tus redes sociales y con la ayuda de todos saldremos adelante!

                #StopCorona
            </div>
        </transition-group>

        <recaptcha v-if="displayCaptcha" class="mb-3" @error="onError" @success="onSuccess" @expired="onExpired" />

        <div class="navigation-wrapper" v-if="!displayCaptcha">
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
        submittedField: false,
        displayCaptcha: false,
        validChallenge: false,
        challenge: undefined,
        formData: {
            tipo: null,
            offer_type: null,
            offer_quantity: null,
            offer_description: null,
            offers: [],
            contactType: null,
            account: null,
            name: null,
            phone: null,
            email: null,
            city: null,
            postalCode: null,
            street: null,
            join: null,
            needs: [],
            need_type: null,
            need_quantity: null,
            need_description: null
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
        isTelInput () {
            return this.stepProps.input === 'tel'
        },
        isNoneInput () {
            return this.stepProps.input === 'none'
        },
        shouldDisplayAcceptButton () {
            return this.isTextInput() || this.isNumberInput() || this.isEmailInput() || this.isTelInput()
        },
        getInputOptions () {
            if (this.stepProps.input !== 'button') {
                return []
            }

            return this.stepProps.options
        },
        goToStep (step) {
            this.submittedField = false

            if (step === -1) {
                this.displayCaptcha = true
                return
            }

            // Si pone otra necesidad
            if (this.step === 5) {
                this.formData.needs.push({
                    quantity: this.formData.need_quantity,
                    isOffer: false,
                    type: this.formData.need_type,
                    details: this.formData.need_description,
                    other: null
                })

                this.formData.need_quantity = null
                this.formData.need_type = null
                this.formData.need_description = null
            }

            // Si pone otro ofrecimiento
            if (this.step === 16) {
                this.formData.offers.push({
                    quantity: this.formData.offer_quantity,
                    isOffer: true,
                    type: this.formData.offer_type,
                    details: this.formData.offer_description,
                    other: null
                })

                this.formData.offer_quantity = null
                this.formData.offer_type = null
                this.formData.offer_description = null
            }

            this.step = step
            this.addstepProps()
        },
        findStepById (stepId) {
            for (let i = 0; i < this.formDefinition.length; i++) {
                if (this.formDefinition[i].id === stepId) {
                    return this.formDefinition[i]
                }
            }

            return null
        },
        addstepProps () {
            for (let i = 0; i < this.formDefinition.length; i++) {
                if (this.formDefinition[i].step === this.step) {
                    if (this.formDefinition[i].condition) {
                        const condition = this.formDefinition[i].condition
                        if (!condition.type && this.formData[condition.id] !== condition.value) {
                            this.goToStep(this.formDefinition[i].next)
                            break
                        } else if (condition.type === 'different' && this.formData[condition.id] === condition.value) {
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
            this.submittedField = true
            const isValid = this.$refs[this.stepProps.id].checkValidity()
            this.$refs[this.stepProps.id].reportValidity()

            if (isValid) {
                this.formData[this.stepProps.id] = this.$refs[this.stepProps.id].localValue
                this.goToStep(this.stepProps.next)
            }
        },
        getStock () {
            return this.formData.tipo === 'Ofrezco' ? this.formData.offers.slice(0, 3) : this.formData.needs.slice(0, 3)
        },
        submitForm () {
            const data = {
                name: this.formData.name,
                email: this.formData.email,
                account: this.formData.account,
                city: this.formData.city,
                join: this.formData.join === 'Si',
                phone: this.formData.phone,
                postalCode: this.formData.postalCode,
                street: this.formData.street,
                contactType: this.formData.contactType,
                challenge: this.challenge,
                stocks: this.getStock()
            }

            fetch(
                'https://api.rescueapp.es/request',
                {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json().then(text => ({
                    json: text,
                    meta: response
                }))
                    .then(({ json }) => {
                        if (json && json.error) {
                            const field = json.details[0].match(/"(.*?)"/)
                            if (field !== 'challenge') {
                                this.displayCaptcha = false
                                const stepData = this.findStepById(field)
                                this.goToStep(stepData.step)
                                this.stepProps.error = json.error
                            } else {
                                this.goToStep(-1)
                            }
                        } else {
                            this.displayCaptcha = false
                            this.step = -1
                            this.addstepProps()
                        }
                    }))
        },
        onSuccess (token) {
            this.challenge = token
            this.validChallenge = true
            this.submitForm()
        },
        onExpired () {
            this.challenge = undefined
            this.validChallenge = false
        },
        onError (error) {
            this.challenge = undefined
            this.validChallenge = false
            console.log(error)
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

    .submitted input:invalid {
        border-color: red;
    }

    .step-title {
        color: rgb(79, 169, 179);
    }

    .thanks-wrapper {
        font-size: 1.5rem;
        font-weight: 800;
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

    .form-control::placeholder {
        color: lightgray;
        font-style: italic;
    }

    .error {
        color: red;
    }

</style>
