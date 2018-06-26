<template>
  <div class="field">
    <div class="control">
      <div class="select">
        <select>
          <option value="" selected disabled hidden>Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GenderSelector'
}
</script>
