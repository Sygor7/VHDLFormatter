import re

def format_vhdl(code):
    keywords = ['entity', 'architecture', 'begin', 'end', 'process', 'is', 'signal']
    keyword_pattern = re.compile(r'\b(' + '|'.join(keywords) + r')\b', re.IGNORECASE)
    
    def keyword_replacer(match):
        return match.group(1).upper()

    formatted_code = keyword_pattern.sub(keyword_replacer, code)
    return formatted_code

def main():
    import sys
    if len(sys.argv) != 2:
        print("Usage: python formatter.py <filename>")
        return

    filename = sys.argv[1]
    with open(filename, 'r') as file:
        code = file.read()
    
    formatted_code = format_vhdl(code)
    
    with open(filename, 'w') as file:
        file.write(formatted_code)

if __name__ == "__main__":
    main()
