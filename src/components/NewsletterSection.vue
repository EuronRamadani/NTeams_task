<template>
  <div
    class="bg-[#1E1B4B] rounded-xl md:rounded-2xl p-8 md:p-12 text-center relative overflow-hidden mx-4 md:mx-0"
  >
    <div class="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32">
      <div
        class="w-12 md:w-16 h-12 md:h-16 border-4 border-[#6366F1] opacity-20 rounded-full"
      ></div>
    </div>
    <div class="absolute bottom-0 right-0">
      <!-- <img
        src="@/assets/star-pattern.svg"
        alt=""
        class="w-24 h-24 opacity-20"
      /> -->
    </div>
    <h2 class="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
      Never miss out our latest news
    </h2>
    <div class="max-w-md mx-auto relative">
      <form @submit.prevent="handleSubmit" class="flex gap-2">
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="w-full px-4 md:px-6 py-2.5 md:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
          required
        />
        <button
          type="submit"
          class="bg-[#6366F1] text-white px-4 md:px-6 py-1.5 md:py-2 rounded-lg hover:bg-[#4F46E5] transition-colors"
        >
          Sign up
        </button>
      </form>
    </div>
    <p class="text-white/60 text-xs md:text-sm mt-3 md:mt-4">
      By submitting this form, you'll receive emails from Native Teams.<br />
      For details, view our Privacy Policy.
    </p>

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
                class="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all relative"
              >
                <!-- Close button -->
                <button
                  @click="closeModal"
                  class="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                >
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <!-- Success Icon -->
                <div class="mx-auto w-16 h-16 mb-4">
                  <div
                    class="w-full h-full rounded-full bg-gradient-to-br from-[#6366F1] via-pink-500 to-yellow-500 flex items-center justify-center"
                  >
                    <svg
                      class="h-8 w-8 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                </div>

                <DialogTitle
                  as="h3"
                  class="text-xl font-semibold leading-6 text-gray-900 mb-2"
                >
                  Thank you for signing up!
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Your email has been added to our list.<br />
                    Stay tuned for more news, and be the first to hear from us.
                  </p>
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

<style scoped>
.btn {
  @apply inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2;
}

.btn-primary {
  @apply bg-[#6366F1] text-white hover:bg-[#4F46E5] focus-visible:ring-[#6366F1];
}
</style>
