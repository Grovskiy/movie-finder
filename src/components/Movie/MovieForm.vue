<script lang="ts" setup>
import { type FormInstance, type FormRules } from 'element-plus'
import { Picture as IconPicture } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'

enum FileErrorsEnum {
  IncorrectType = 'IncorrectType',
  IncorrectSize = 'IncorrectSize'
}
interface RuleForm {
  title: string
  director: string
  year: Date | null
  poster: object | null | FileErrorsEnum
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  title: '',
  director: '',
  year: null,
  poster: null
})

const checkFile = (rule: any, value: any, callback: any) => {
  if (!value) return callback(new Error('Please add an image'))

  if (value === FileErrorsEnum.IncorrectType)
    return callback(new Error('Only JPG or PNG images allowed'))
  if (value === FileErrorsEnum.IncorrectSize) return callback(new Error('Image must be under 2 MB'))
  return callback()
}

const rules = reactive<FormRules<RuleForm>>({
  title: [{ required: true, message: 'Please input title', trigger: 'blur' }],
  director: [{ required: true, message: 'Please input director', trigger: 'blur' }],
  year: [{ required: true, message: 'Please pick a year', trigger: 'change' }],
  poster: [{ validator: checkFile }]
})

const handleSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      alert('Submitted!')
      console.log(ruleForm)
    }
  })
}

const posterPreview = ref('')
const posterPreviewName = ref('')

const allowedTypes = ['image/jpeg', 'image/png']
const maxSize = 2 * 1024 * 1024 // 2 MB
const handlerChangeFile = (e: Event) => {
  const target = e.target as HTMLInputElement
  const file = target.files![0]

  if (!allowedTypes.includes(file.type)) return triggerValidationFile(FileErrorsEnum.IncorrectType)
  if (file.size > maxSize) return triggerValidationFile(FileErrorsEnum.IncorrectSize)

  ruleForm.poster = file
  posterPreviewName.value = file.name

  const reader = new FileReader()
  reader.onload = (e: ProgressEvent<FileReader>) => {
    posterPreview.value = e.target!.result as string
  }
  reader.readAsDataURL(file)
  triggerValidationFile()
}

const triggerValidationFile = (error?: FileErrorsEnum) => {
  if (!ruleFormRef.value) return
  if (error) ruleForm.poster = error
  ruleFormRef.value.validateField('poster')
}
</script>

<template>
  <el-row :gutter="20">
    <el-col :xs="24" :md="12">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px">
        <el-form-item label="Title" prop="title">
          <el-input v-model="ruleForm.title" placeholder="Pick a title" />
        </el-form-item>

        <el-form-item label="Director" prop="director">
          <el-input v-model="ruleForm.director" placeholder="Pick a director" />
        </el-form-item>

        <el-form-item label="Release Year" prop="year">
          <el-date-picker v-model="ruleForm.year" type="year" placeholder="Pick a year" />
        </el-form-item>

        <el-form-item label="Poster" prop="poster">
          <label class="relative inline-block">
            <input
              @change="handlerChangeFile"
              type="file"
              class="opacity-0 w-full h-full absolute left-0 top-0 cursor-pointer hidden"
            />
            <el-button tag="div" :link="true"> Upload Poster </el-button>
            <span v-if="posterPreviewName" class="ml-2">{{ posterPreviewName }}</span>
          </label>
        </el-form-item>

        <el-button type="primary" @click="handleSubmit(ruleFormRef)" class="mb-6">Submit</el-button>
      </el-form>
    </el-col>
    <el-col :xs="24" :md="12">
      <div class="image-preview">
        <el-image :src="posterPreview" fit="contain">
          <template #error>
            <div class="image-slot">
              <el-icon><icon-picture /></el-icon>
            </div>
          </template>
        </el-image>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.image-preview {
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  vertical-align: top;
}
.image-preview .el-image {
  padding: 0 5px;
  max-height: 600px;
  width: 100%;
  height: 460px;
}

.image-preview .image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 30px;
}
.image-preview .image-slot .el-icon {
  font-size: 30px;
}
:deep(.el-date-editor.el-input) {
  width: 100%;
}
</style>
