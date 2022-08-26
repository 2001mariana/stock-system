/* eslint-disable @typescript-eslint/no-explicit-any */

import { mdiDelete, mdiEye, mdiPencil } from '@mdi/js'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import organizeData from '../../utils/organizeDataForTable'
import paginate from '../../utils/paginate'
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
  itemsPerPage?: number
  onDelete?: (item: any) => void
  onEdit?: (item: any) => void
  onViewDetail?: (item: any) => void
}

const Table = ({
  headers,
  data,
  enableActions,
  itemsPerPage,
  onDelete,
  onEdit,
  onViewDetail
}: TableProps) => {
  const _itemsPerPage = itemsPerPage || 5
  //const page = parseInt(window.location.search) || 1
  const [clickedPage, setClickedPage] = useState<number>(1)
  const [selectedPage, seSelectedPage] = useState<string>('')
  const [organizedData, indexedHeaders] = organizeData(data, headers)
  const paginatedData = paginate(organizedData, _itemsPerPage, clickedPage)
  const totalPages = Math.ceil(organizedData.length / _itemsPerPage)

  const handleClickPagination = (pageClicked: number) => {
    setClickedPage(pageClicked)
    seSelectedPage(`selected-${pageClicked}`)
  }

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
          {paginatedData.map((row, i) => {
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
        {Array(totalPages)
          .fill('')
          .map((_, i) => {
            return (
              <NavLink
                key={i}
                //className={selectedPage}
                className={(
                  { isActive } //(isActive) --> ({isActive})
                ) => isActive ? classes.linkActive : classes.link)}
                to={`/products?page=${i + 1}`}
                onClick={() => handleClickPagination(i + 1)}
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
