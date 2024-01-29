<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'

interface RuleForm {
  name: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: ''
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input name of movie', trigger: 'blur' },
    { min: 1, max: 100, message: 'Length should be 1 to 100', trigger: 'blur' }
  ]
})

const router = useRouter()

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      router.push({ name: 'result', query: { keyword: ruleForm.name } })
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    :size="formSize"
    @submit.prevent="submitForm(ruleFormRef)"
  >
    <el-form-item prop="name">
      <el-input v-model="ruleForm.name" size="large" placeholder="Enter title of movie" />
    </el-form-item>

    <div class="flex justify-center">
      <el-button type="primary" native-type="submit"> Find </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </div>
  </el-form>
</template>

<style scoped></style>
