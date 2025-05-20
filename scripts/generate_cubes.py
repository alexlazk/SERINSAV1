import json
from pathlib import Path
import re

def snake_to_camel(s):
    return ''.join(word.capitalize() for word in s.split('_'))

def guess_type(column_name):
    name = column_name.lower()
    if re.search(r'fecha|date|time', name):
        return 'time'
    if re.search(r'codigo|cod|id|numero|monto|cantidad|dias', name):
        return 'number'
    return 'string'

def generate_schema(json_file, output_dir='schema'):
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    tables = data.get('tables', {})
    Path(output_dir).mkdir(exist_ok=True)

    for table_name, table_info in tables.items():
        cube_name = snake_to_camel(table_name)
        columns = table_info.get('columns', {})
        dimension_lines = []
        for col in columns.keys():
            col_type = guess_type(col)
            dimension_lines.append(f"{col}: {{ sql: '{col}', type: '{col_type}' }}")
        dimensions = ',\n    '.join(dimension_lines)
        cube_js = f"""
cube(`{cube_name}`, {{
  sql: `SELECT * FROM {table_name}`,

  measures: {{
    count: {{
      type: 'count',
    }},
  }},

  dimensions: {{
    {dimensions}
  }}
}});
"""
        Path(output_dir, f"{cube_name}.js").write_text(cube_js.strip(), encoding='utf-8')

if __name__ == '__main__':
    generate_schema('Database_structure.json')
