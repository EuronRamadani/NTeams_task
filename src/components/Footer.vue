<template>
  <footer class="bg-[#1E1B4B] text-white">
    <!-- Mobile Footer -->
    <div class="md:hidden">
      <div class="container mx-auto px-4 py-8">
        <!-- Logo -->
        <div class="mb-8">
          <div class="flex items-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0L29.8564 8V24L16 32L2.14359 24V8L16 0Z"
                fill="#6366F1"
              />
              <path
                d="M16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                fill="white"
              />
            </svg>
            <span class="ml-2 text-xl font-bold">Native Teams</span>
          </div>
        </div>

        <!-- Collapsible Sections -->
        <div class="space-y-4">
          <!-- Platform Section -->
          <details class="group">
            <summary class="flex items-center justify-between cursor-pointer">
              <h3 class="font-bold">PLATFORM</h3>
              <svg
                class="w-5 h-5 transition-transform group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <ul class="mt-4 space-y-2">
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Employer of Record</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >PEO Services</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Company as a Service</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Work Payments</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Global Payroll</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Tax Management</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Expenses Management</a
                >
              </li>
            </ul>
          </details>

          <!-- Information Section -->
          <details class="group">
            <summary class="flex items-center justify-between cursor-pointer">
              <h3 class="font-bold">INFORMATION</h3>
              <svg
                class="w-5 h-5 transition-transform group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <ul class="mt-4 space-y-2">
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Legal Entity</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Client Invoicing</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Payment Requests</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Global Mobility</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Employees Benefits</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >For Startups</a
                >
              </li>
            </ul>
          </details>

          <!-- Company Section -->
          <details class="group">
            <summary class="flex items-center justify-between cursor-pointer">
              <h3 class="font-bold">COMPANY</h3>
              <svg
                class="w-5 h-5 transition-transform group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <ul class="mt-4 space-y-2">
              <li>
                <a href="#" class="text-white/70 hover:text-white">About</a>
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Our Countries</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Affiliates</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Partnerships</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white">Charity</a>
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Data & Security</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Book a demo</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white">Contact</a>
              </li>
            </ul>
          </details>
        </div>
      </div>

      <!-- Mobile Bottom Links -->
      <div class="border-t border-white/10 py-8">
        <div class="container mx-auto px-4 flex flex-col items-center gap-8">
          <div class="flex gap-8 whitespace-nowrap">
            <a href="#" class="text-white/70 hover:text-white text-[10px]"
              >Cookie Policy</a
            >
            <a href="#" class="text-white/70 hover:text-white text-[10px]"
              >Privacy Policy</a
            >
            <a href="#" class="text-white/70 hover:text-white text-[10px]"
              >Terms & Conditions</a
            >
          </div>
          <span class="text-white/70 text-[10px]">© Native Teams Limited</span>
        </div>
      </div>
    </div>

    <!-- Desktop Footer -->
    <div class="hidden md:block">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-4 gap-8 py-16">
          <!-- Logo -->
          <div>
            <div class="flex items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 0L29.8564 8V24L16 32L2.14359 24V8L16 0Z"
                  fill="#6366F1"
                />
                <path
                  d="M16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                  fill="white"
                />
              </svg>
              <span class="ml-2 text-xl font-bold">Native Teams</span>
            </div>
          </div>

          <!-- Platform -->
          <div>
            <h3 class="font-bold mb-4">PLATFORM</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Employer of Record</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >PEO Services</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Company as a Service</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Work Payments</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Global Payroll</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Tax Management</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Expenses Management</a
                >
              </li>
            </ul>
          </div>

          <!-- Information -->
          <div>
            <h3 class="font-bold mb-4">INFORMATION</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Legal Entity</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Client Invoicing</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Payment Requests</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Global Mobility</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Employees Benefits</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >For Startups</a
                >
              </li>
            </ul>
          </div>

          <!-- Company -->
          <div>
            <h3 class="font-bold mb-4">COMPANY</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-white/70 hover:text-white">About</a>
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Our Countries</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Affiliates</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Partnerships</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white">Charity</a>
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Data & Security</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white"
                  >Book a demo</a
                >
              </li>
              <li>
                <a href="#" class="text-white/70 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Desktop Bottom Links -->
        <div class="border-t border-white/10">
          <div class="flex items-center py-4">
            <span class="text-white/70">© Native Teams Limited</span>
            <div class="flex-1 flex justify-center gap-8">
              <a href="#" class="text-white/70 hover:text-white"
                >Cookie Policy</a
              >
              <a href="#" class="text-white/70 hover:text-white"
                >Privacy Policy</a
              >
              <a href="#" class="text-white/70 hover:text-white"
                >Terms & Conditions</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Static component, no logic needed
</script>
