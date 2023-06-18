'use client'
import { PercentageDonut } from '@components/common/atoms/PercentageDonut'
import { CalorieIntakeMealSubFormProps } from './CalorieIntakeMealSubForm.types'
import startCase from 'lodash/startCase'
import { Button } from '@components/common/atoms/Button'
import { useState } from 'react'
import PencilIcon from '@public/icons/pencil-icon.svg'
import CheckboxIcon from '@public/icons/checkbox-icon.svg'
import { useCalorieIntakeStore } from '../store'
import {
  useCalorieIntakeMealSubForm,
  useMealFields,
} from './CalorieIntakeMealSubForm.hooks'

export const CalorieIntakeMealSubForm = ({
  meal,
}: CalorieIntakeMealSubFormProps) => {
  const { handleEditClick, editing } = useCalorieIntakeMealSubForm()
  const { consumed, limit, handleConsumptionChange, handleLimitChange } =
    useMealFields(meal)

  return (
    <div className="border-2 rounded border-light-blue4 py-4 px-4 flex items-center gap-4">
      <PercentageDonut percentage={(consumed / limit) * 100} />
      <>
        <div>
          <p className="text-violet-blue font-semibold">{startCase(meal)}</p>
          {editing ? (
            <div className="flex gap-2">
              <input
                className="input input-xs w-[15%] bg-white border border-violet-blue"
                type="number"
                value={consumed}
                onChange={handleConsumptionChange}
              />
              <span>/</span>
              <input
                className="input input-xs w-[15%] border-violet-blue bg-white"
                type="number"
                value={limit}
                onChange={handleLimitChange}
              />
              <span>kcal</span>
            </div>
          ) : (
            <p>
              {consumed} / {limit} kcal
            </p>
          )}
        </div>
      </>
      <div className="flex-grow" />
      <Button className="rounded-3xl" onClick={handleEditClick} variant="TEXT">
        {editing ? <CheckboxIcon /> : <PencilIcon />}
      </Button>
    </div>
  )
}
