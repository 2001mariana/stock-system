/* eslint-disable @typescript-eslint/no-explicit-any */

import { mdiDelete, mdiEye, mdiPencil } from '@mdi/js'
import React from 'react'
import { NavLink } from 'react-router-dom'
import organizeData from '../../utils/organizeDataForTable'
import Button from '../Button'

import './Table.scss'

export interface TableHeader {
  key: string
  value: string
  right?: boolean
}

declare interface TableProps {
  headers: TableHeader[]
  data: any[]
  enableActions?: boolean
  onDelete?: (item: any) => void
  onEdit?: (item: any) => void
  onViewDetail?: (item: any) => void
}

const Table = ({
  headers,
  data,
  enableActions,
  onDelete,
  onEdit,
  onViewDetail
}: TableProps) => {
  const [organizedData, indexedHeaders] = organizeData(data, headers)
  const page = 2

  return (
    <>
      <table className="Table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th className={header.right ? 'right' : ''} key={header.key}>
                {header.value}
              </th>
            ))}
            {enableActions && <th className="right">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {organizedData.map((row, i) => {
            return (
              <tr key={i}>
                {Object.keys(row).map((item, i) =>
                  item !== '$original' ? (
                    <>
                      <td
                        key={row.$original._id + i}
                        className={indexedHeaders[item].right ? 'right' : ''}
                      >
                        {row[item]}
                      </td>
                    </>
                  ) : null
                )}
                {enableActions && (
                  <td className="actions right">
                    {onViewDetail && (
                      <Button
                        onClick={() =>
                          onViewDetail && onViewDetail(row.$original)
                        }
                        icon={mdiEye}
                        size="small-xxx"
                        variant="outlined"
                      />
                    )}
                    {onEdit && (
                      <Button
                        onClick={() => onEdit && onEdit(row.$original)}
                        icon={mdiPencil}
                        size="small-xxx"
                        variant="outlined"
                      />
                    )}
                    {onDelete && (
                      <Button
                        onClick={() => onDelete && onDelete(row.$original)}
                        variant="outlined"
                        icon={mdiDelete}
                        size="small-xxx"
                      />
                    )}
                  </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="Table__pagination">
        {Array(5)
          .fill('')
          .map((_, i) => {
            return (
              <NavLink
                key={i + 1}
                className={isActive => ""}
                activeClassName="selected"
                to={`/products?page=${i + 1}`}
                isActive={() => page === i + 1}
              >
                {i + 1}
              </NavLink>
            )
          })}
      </div>
    </>
  )
}

export default Table
