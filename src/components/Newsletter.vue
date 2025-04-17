<template>
  <div class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Never miss out our latest news</h2>
        <p class="text-gray-600 mb-8">
          By submitting this form, you will receive emails from Native Teams.
          For details, view our Privacy Policy.
        </p>

        <form
          @submit.prevent="handleSubmit"
          class="flex gap-4 max-w-md mx-auto"
        >
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            required
          />
          <button type="submit" class="btn btn-primary">Sign up</button>
        </form>
      </div>
    </div>

    <!-- Success Modal -->
    <TransitionRoot appear :show="isSuccess" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  Subscription Successful!
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Thank you for subscribing to our newsletter. You'll be the
                    first to know about our latest updates!
                  </p>
                </div>

                <div class="mt-4">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="closeModal"
                  >
                    Got it, thanks!
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const email = ref("");
const isSuccess = ref(false);

const handleSubmit = () => {
  // Here you would typically make an API call to subscribe the user
  isSuccess.value = true;
  email.value = "";
};

const closeModal = () => {
  isSuccess.value = false;
};
</script>
