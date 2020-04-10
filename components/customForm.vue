<template>
    <div>
        <h1>Ofreces o necesitas algo?</h1>

        <button>Ofrezco</button>
        <button>Necesito</button>

        <button v-if="step > 0" @click="changeStep(-1)">prev</button>
        <button v-if="step < stepsNumber" @click="changeStep(1)">next</button>
    </div>
</template>

<script>
import formDefinition from '@/assets/formDefinition.json'

export default {
	data: () => ({
		step: 0,
		stepsNumber: 20
	}),
    methods: {
		changeStep(direction) {
			console.log(formDefinition);
            this.step += direction;
        }
    }
}
</script>
