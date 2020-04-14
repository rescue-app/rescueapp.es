<template>
    <div class="row mt-4">
        <!-- Loading -->
        <div class="col" v-if="loading">
            <div class="spinner-border spinner-border-sm" role="status"></div>&nbsp;
            <span class="font-weight-bold">Un momento...</span>
        </div>

        <!-- Process ended -->
        <div class="col" v-if="!loading && success !== undefined">
            <div v-if="success === true" class="alert alert-success" role="alert">
                ¡Genial! Nos pondremos en contacto contigo lo antes posible :)
            </div>
            <div v-if="success !== true" class="alert alert-danger" role="alert">
                Lo sentimos, parece que hemos tenido algún problema.
                <pre>{{ sucess }}</pre>
            </div>
        </div>

        <!-- Valid object -->
        <div class="col" v-if="!loading && success === undefined">
            <div v-if="element === false" class="alert alert-danger" role="alert">
                Lo sentimos, no encontramos este elemento :(
            </div>
            <div v-if="element !== false" class="text-block">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5>
                            {{ element.quantity }}x {{ category }}
                            <br v-if="element.details" /><small>{{ element.details }}</small>
                        </h5>
                        <span class="badge badge-secondary">Referencia: <strong>{{ element.reference }}</strong></span>
                    </div>
                </div>

                <form @submit.prevent="onSubmit">
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="name">Teléfono</label>
                            <input v-model="request.name" type="text" class="form-control" id="name" placeholder="Nombre completo" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="contactType">¿Quien eres?</label>
                            <select v-model="request.contactType" class="form-control" id="contactType" required>
                                <option>Empresa</option>
                                <option>Universidad</option>
                                <option>Asociación</option>
                                <option>Particular</option>
                                <option>Otro</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="email">E-mail</label>
                            <input v-model="request.email" type="email" class="form-control" id="email" placeholder="Dirección de e-mail" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="phone">Teléfono</label>
                            <input v-model="request.phone" type="text" class="form-control" id="phone" placeholder="Teléfono" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="street">Dirección</label>
                            <input v-model="request.street" type="text" class="form-control" id="street" placeholder="Calle, número, piso..." required>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="city">Ciudad</label>
                            <input v-model="request.city" type="text" class="form-control" id="city" placeholder="Ciudad" required>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="postalCode">Código Postal</label>
                            <input v-model="request.postalCode" type="text" class="form-control" id="postalCode" placeholder="Código postal" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-12">
                            <label for="details">Notas</label>
                            <textarea v-model="request.details" class="form-control" id="details" rows="3" maxlength="230" placeholder="Si necesitas indicar alguna observación puedes hacerlo aquí"></textarea>
                        </div>
                    </div>
                    <div class="form-group form-check">
                        <input v-model="request.join" value="1" type="checkbox" class="form-check-input" id="join">
                        <label class="form-check-label" for="join">Quiero pertenecer a la comunidad de Rescueapp</label>
                    </div>
                    <recaptcha class="mb-3" @error="onError" @success="onSuccess" @expired="onExpired" />

                    <button :disabled="!validChallenge" class="btn btn-success btn-lg rounded-0" type="submit">Enviar</button>

                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        type: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        reference: {
            type: String,
            required: true
        }
    },
    async fetch () {
        const requestUrl = `https://api.rescueapp.es/${this.type}/${this.reference}/${this.id}`

        try {
            if (!this.id || !this.reference || !this.type) {
                throw new Error('Missing values')
            }

            this.element = await this.$http.$get(requestUrl)
            this.request.reference = this.element.reference
        } catch (ex) {
            this.element = false
        } finally {
            this.loading = false
        }
    },
    fetchOnServer: false,
    data () {
        return {
            element: {},
            request: {
                join: false
            },
            loading: true,
            validChallenge: false,
            success: undefined
        }
    },
    computed: {
        category () {
            return this.element.type === 'Otros' ? this.element.other : this.element.type
        }
    },
    methods: {
        async onSubmit () {
            const requestUrl = 'https://api.rescueapp.es/ask'
            this.loading = true
            try {
                this.request.account = this.request.name
                await this.$http.$post(requestUrl, this.request)
                this.success = true
                this.$ga.event({
                    eventCategory: 'Forms',
                    eventAction: 'Send Ask For ' + this.type,
                    eventLabel: 'ask',
                    eventValue: 1
                })
            } catch (error) {
                this.success = error
            } finally {
                this.loading = false
            }
        },
        onSuccess (token) {
            this.request.challenge = token
            this.validChallenge = true
        },
        onExpired () {
            this.request.challenge = undefined
            this.validChallenge = false
        },
        onError (error) {
            this.request.challenge = undefined
            this.validChallenge = false
            console.log(error)
        }
    }

}
</script>
