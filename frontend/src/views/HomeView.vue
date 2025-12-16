<template>
  <main class="flex flex-col w-full">
    <!-- Hero Section -->
    <section
      class="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-16 sm:py-24 text-center"
    >
      <div class="mx-auto max-w-2xl space-y-8">
        <!-- Badge -->
        <div
          class="inline-flex items-center space-x-2 rounded-full border border-neutral-3 bg-neutral-1 px-4 py-2"
        >
          <span class="h-2 w-2 rounded-full bg-accent-green"></span>
          <span class="text-sm font-medium text-neutral-7">
            Join a movement for civic change
          </span>
        </div>

        <!-- Headline -->
        <div class="space-y-4">
          <h1
            class="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-neutral-9"
          >
            Your voice shapes your community
          </h1>
          <p
            class="text-lg text-neutral-6 sm:text-xl leading-relaxed"
          >
            Report local issues, track progress, and collaborate with your
            community to build the neighborhoods we all deserve.
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 pt-4">
          <RouterLink
            to="/register"
            class="inline-flex items-center justify-center rounded-lg bg-accent-blue px-6 py-3 font-medium text-white transition-all hover:opacity-90 active:scale-95 sm:px-8"
          >
            Get Started
          </RouterLink>
          <RouterLink
            to="/issues"
            class="inline-flex items-center justify-center rounded-lg border border-neutral-3 bg-neutral-0 px-6 py-3 font-medium text-neutral-9 transition-all hover:bg-neutral-1 sm:px-8"
          >
            Explore Issues
          </RouterLink>
        </div>

        <!-- Trust Metric -->
        <div class="pt-8">
          <p class="text-xs font-semibold uppercase tracking-widest text-neutral-5">
            Trusted by citizens everywhere
          </p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section
      class="border-t border-neutral-2 bg-neutral-1 px-4 py-16 sm:py-24"
    >
      <div class="mx-auto max-w-6xl">
        <div class="space-y-12">
          <!-- Section Header -->
          <div class="space-y-4 text-center">
            <h2
              class="text-3xl font-bold sm:text-4xl text-neutral-9"
            >
              How it works
            </h2>
            <p
              class="text-lg text-neutral-6 mx-auto max-w-2xl"
            >
              Simple, transparent, and effective—change starts here.
            </p>
          </div>

          <!-- Features Grid -->
          <div
            class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <!-- Feature 1 -->
            <div
              class="flex flex-col space-y-3 rounded-lg border border-neutral-2 bg-neutral-0 p-6"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-blue/10"
              >
                <svg
                  class="h-6 w-6 text-accent-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 8l-6-3m6 3l6-3m0 0l9-18-9 18 0 0m-9-18l-9 18 9-2"
                  />
                </svg>
              </div>
              <h3
                class="text-lg font-semibold text-neutral-9"
              >
                Report Issues
              </h3>
              <p class="text-neutral-6 text-sm leading-relaxed">
                Document problems in your area with photos, location, and
                detailed descriptions.
              </p>
            </div>

            <!-- Feature 2 -->
            <div
              class="flex flex-col space-y-3 rounded-lg border border-neutral-2 bg-neutral-0 p-6"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-green/10"
              >
                <svg
                  class="h-6 w-6 text-accent-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3
                class="text-lg font-semibold text-neutral-9"
              >
                Track Progress
              </h3>
              <p class="text-neutral-6 text-sm leading-relaxed">
                Get real-time updates as authorities respond and resolve the
                issues you care about.
              </p>
            </div>

            <!-- Feature 3 -->
            <div
              class="flex flex-col space-y-3 rounded-lg border border-neutral-2 bg-neutral-0 p-6"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-pink/10"
              >
                <svg
                  class="h-6 w-6 text-accent-pink"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 12H9m6 0a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3
                class="text-lg font-semibold text-neutral-9"
              >
                Community Power
              </h3>
              <p class="text-neutral-6 text-sm leading-relaxed">
                Amplify your voice—upvote and support issues that matter to
                your neighbors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="flex flex-col items-center justify-center px-4 py-16 sm:py-24"
    >
      <div class="mx-auto max-w-2xl space-y-8 text-center">
        <div class="space-y-4">
          <h2
            class="text-3xl font-bold sm:text-4xl text-neutral-9"
          >
            Ready to make a difference?
          </h2>
          <p class="text-lg text-neutral-6">
            Join thousands of citizens already creating change in their
            communities.
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 pt-4">
          <RouterLink
            to="/register"
            class="inline-flex items-center justify-center rounded-lg bg-accent-green px-6 py-3 font-medium text-white transition-all hover:opacity-90 active:scale-95 sm:px-8"
          >
            Join Now
          </RouterLink>
          <RouterLink
            to="/about"
            class="inline-flex items-center justify-center rounded-lg border border-neutral-3 bg-neutral-0 px-6 py-3 font-medium text-neutral-9 transition-all hover:bg-neutral-1 dark:border-neutral-7 dark:bg-neutral-8 dark:text-neutral-0 dark:hover:bg-neutral-7 sm:px-8"
          >
            Learn More
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>
