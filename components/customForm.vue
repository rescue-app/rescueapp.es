<template>
    <div class="form-wrapper">
        <transition-group name="fade">
            <!--To be deleted when it is done-->
            <h5 :key="'step' + step">{{ step }}</h5>

            <div v-if="step !== -1" :key="'form-wrapper'">
                <h6 :key="'text' + step" >{{ currentStepInfo.text }}</h6>

                <b-button :key="'button' + step + option.text"
                          v-if="currentStepInfo.input === 'button'"
                          v-for="option in currentStepInfo.options"
                          @click="storeOptionInfo(option)">
                    {{ option.text }}
                </b-button>

                <b-input :key="'input' + step" type="text" v-if="currentStepInfo.input === 'text'"></b-input>

                <b-input :key="'number' + step" type="number" v-if="currentStepInfo.input === 'number'"></b-input>

                <b-input :key="'email' + step" type="email" v-if="currentStepInfo.input === 'email'"></b-input>

                <b-button v-if="currentStepInfo.input !== 'button' && currentStepInfo.input !== 'select'" @click="goToStep(currentStepInfo.next)">Aceptar</b-button>

                <b-select :key="'select' + step"  v-if="currentStepInfo.input === 'select'" @change="goToStep(currentStepInfo.next);">
                    <option v-for="option in currentStepInfo.options" :value="option">{{ option }}</option>
                </b-select>
            </div>

            <div v-else :key="'thanks-wrapper'">
                ¡Muchas gracias !

                Te contactaremos lo antes posible para verificar y validar tu solicitud.

                Comparte Rescue app en tus redes sociales y con la ayuda de todos saldremos adelante!

                #StopCorona
            </div>
        </transition-group>

        <div>
            <b-button variant="outline-primary" v-if="step > 1" @click="goToStep(step - 1)"> < </b-button>
            <b-button variant="outline-primary" v-if="step < stepsNumber" @click="goToStep(step + 1)"> > </b-button>
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

        }
	}),
    mounted() {
		this.formDefinition = formDefinition;
		this.stepsNumber = formDefinition.length;
		this.addCurrentStepInfo();
    },
    methods: {
		goToStep(step) {
			if (step === -1) {
				this.submitForm();
            }

            this.step = step;
			this.addCurrentStepInfo();
		},
        addCurrentStepInfo() {
			for (let i = 0; i < this.formDefinition.length; i++) {
				if (this.formDefinition[i].step === this.step) {
					this.currentStepInfo = this.formDefinition[i];
                }
			}
        },
		storeOptionInfo(option) {
			this.formData[this.currentStepInfo.step] = option.text;
			this.goToStep(option.next);
        },
        submitForm() {
			//TODO
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

    .form-wrapper button {
        margin: 1rem;
    }
</style>
