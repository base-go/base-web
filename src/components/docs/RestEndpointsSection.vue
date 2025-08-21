<template>
  <section id="rest-endpoints" class="mb-16">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">REST Endpoints</h2>
    
    <div class="prose prose-gray dark:prose-invert max-w-none mb-6">
      <p>Base automatically generates RESTful endpoints for each module following standard conventions.</p>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead class="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Method
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Endpoint
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Description
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Request Body
            </th>
          </tr>
        </thead>
        <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <UBadge color="green" variant="soft">GET</UBadge>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <UKbd>/api/{model}s</UKbd>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">List all records</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <UBadge color="green" variant="soft">GET</UBadge>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <UKbd>/api/{model}s/:id</UKbd>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Get single record</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <UBadge color="blue" variant="soft">POST</UBadge>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <UKbd>/api/{model}s</UKbd>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Create new record</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <UBadge color="orange" variant="soft">JSON</UBadge>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <UBadge color="yellow" variant="soft">PUT</UBadge>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <UKbd>/api/{model}s/:id</UKbd>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Update record</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <UBadge color="orange" variant="soft">JSON</UBadge>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <UBadge color="red" variant="soft">DELETE</UBadge>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <UKbd>/api/{model}s/:id</UKbd>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Delete record</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>