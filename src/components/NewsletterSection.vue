<template>
  <div
    class="bg-[#0a0a2b] p-12 md:p-16 text-center relative overflow-hidden md:mx-0 border-t-4 border-t-[#6366F1] min-h-[300px]"
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

    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">
        Never miss out our <span class="text-[#6366F1]">latest news</span>
      </h2>
      <div class="max-w-xl mx-auto relative px-4 md:px-0">
        <form @submit.prevent="handleSubmit" class="md:relative">
          <!-- Mobile view (stacked) -->
          <div class="flex flex-col gap-3 md:hidden">
            <input
              v-model="email"
              type="email"
              placeholder="Email address"
              class="w-full px-6 py-3.5 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent text-base"
              required
            />
            <button
              type="submit"
              class="w-full bg-[#6366F1] text-white px-6 py-3.5 rounded-full hover:bg-[#4F46E5] transition-colors text-base font-medium"
            >
              Sign up
            </button>
          </div>

          <!-- Desktop view (button inside input) -->
          <div class="hidden md:block">
            <input
              v-model="email"
              type="email"
              placeholder="Email address"
              class="w-full px-6 py-3.5 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent text-base"
              required
            />
            <button
              type="submit"
              style="height: 100%; right: 0"
              class="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#6366F1] text-white px-10 py-2.5 rounded-full hover:bg-[#4F46E5] transition-colors text-base font-medium"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      <p class="text-white/60 text-sm mt-6 px-4 md:px-0">
        By submitting this form, you will receive emails from Native Teams.<br />
        For details, view our Privacy Policy.
      </p>
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
